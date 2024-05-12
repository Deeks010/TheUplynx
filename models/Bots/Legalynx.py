import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))




#Converts the provided legal resources and founders agreement files into text
def get_pdf_text(pdf_docs):
    text=""
    for pdf in pdf_docs:
        pdf_reader= PdfReader(pdf)
        for page in pdf_reader.pages:
            text+= page.extract_text()
    return  text


#Text is now converted into chunks 
def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

#Googles FAISS vector embedding model is used to embed the provided text
def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

#Gemini pro ai provided with prompt along with the context from the FAISS index 
def get_conversational_chain():

    prompt_template = """
    Answer the question as detailed as possible in bulletin points from the provided context,the provided context would be realated to the legal rights,knowledge about the laws and regulatory bodies for starting an social impact project , make sure to provide all the details, if the question is related directly or indirectly to the context as i said before like legal and other stuffs provide an answer to it,if the quesition is 
    completely irrelevant r to the provided context just say, "answer is not available in the context", don't provide the wrong answer\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain
# Function is used to provide more detailed answer if the question is indirectly related to the context 
def get_gemini_chain():
    prompt_template = """
     Act as a complete guide for legal and other information related to starting a business or startup under social impact projects. 
     Provide an answer in simple point form, if the question is related to anyone of these legal information, rights, permissions, and steps 
     to initiate the project(or)startup(or)business  in society. If the question is not related to a social impact project, startup, or business or 
     does not have anyone of these above given words , then say "Answer is not available for this question".
     if required use this as an reference {context}"
    This is the Question: "{question}"
    Answer in bullet points:

    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain
    

#Function that sends the question to other functions and returns output+
def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001")
    
    new_db = FAISS.load_local("faiss_index", embeddings,allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)
    

    chain = get_conversational_chain()
    chain1=get_gemini_chain()

    
    response = chain(
        {"input_documents":docs, "question": user_question}
        , return_only_outputs=True)
    
    if len(response)<(len(user_question)+50):
        response=chain1({"input_documents":docs,"question":user_question},return_only_outputs=True)

    print(response)
    with st.chat_message(name=" "):
        st.write("Reply: ", response["output_text"])




def main():
    st.set_page_config(page_title="Chat PDF", page_icon=":robot:", layout="wide", initial_sidebar_state="collapsed")

    # Load custom CSS
    def local_css(file_name):
        with open(file_name) as f:
            st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

    local_css("models\Bots\style.css")

    st.header("LegaLynx")

    pdf_docs = ['founders-agreement.pdf', 'Legal-Resource-Guide.pdf']
    raw_text = get_pdf_text(pdf_docs)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)

    col1, col2 = st.columns([3, 20])

    with col1:
        user_question = st.text_area("Question:", "", key="user_question", height=200)
        submit_button = st.button("Submit", key="submit_button")



    with col2:
        if not user_question:
            st.markdown("""
                <div style="text-align: center; margin-top: 150px;">
                    <h2 >Hello, how can i assist you under these following -</h2>
                    <div>
                    <h3 style="margin-right:15rem;">- Founders agreement</h3>
                    <h3 >- Legal resource for start up entrepreneurs</h3>
                    </div>
                </div>
                """, unsafe_allow_html=True)
        else:
            user_input(user_question)

if __name__ == "__main__":
    main()