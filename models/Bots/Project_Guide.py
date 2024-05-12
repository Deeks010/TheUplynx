


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

text = """The "Community Recycling Hub" project aims to establish a centralized recycling facility in a suburban community
to address the growing waste management problem. The project's goals are to reduce waste sent to landfills, promote sustainable living,
and create employment opportunities for the community. The facility will accept a wide range of recyclable materials such as paper,
plastic, glass, and metal. The project requires an initial investment of $50,000 to acquire land, construct the facility, and purchase
equipment. The project is expected to create 10 new jobs in the community.The positive impact of the project on society includes
reducing the community's carbon footprint, conserving natural resources, and raising awareness about the importance of recycling.
The project will also provide educational programs for schools and community groups to teach them about recycling and sustainable living.
The legal requirements for the project include obtaining permits for construction and operation of the facility,
complying with environmental regulations, and adhering to health and safety standards. The project will also need to obtain
insurance coverage for the facility and workers"""

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def get_conversational_chain():
    prompt_template = """
    You are now the chatbot assistant for this project with the following details: {context}. Act as an assistant for
    this project and provide accurate and detailed answers to any questions related to it. This includes its goals,
    objectives, positive impact on society, required funding to initiate the project, and legal requirements. Even if
    you can't find a specific answer in the provided context, try to provide a relevant answer by relating it to the project details.
    Ensure your responses are grammatically correct and clear
    Question is :{question}

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3)

    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain

def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

    new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)

    chain = get_conversational_chain()

    response = chain(
        {"input_documents": docs, "question": user_question},
        return_only_outputs=True)

    return response

def main():
    st.set_page_config(page_title="Project Chatbot", page_icon=":robot:", layout="wide", initial_sidebar_state="collapsed")

    # Load custom CSS
    def local_css(file_name):
        with open(file_name) as f:
            st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

    local_css("models\Bots\style.css")

    col1, col2 = st.columns([3, 20])

    with col1:
        user_question = st.text_area("Question ->", "", key="user_question", height=200)
        submit_button = st.button("Submit", key="submit_button")

    if submit_button and user_question:
        text_chunks = get_text_chunks(text)
        get_vector_store(text_chunks)
        answer = user_input(user_question)

        with col2:
            st.markdown(f"<h2>Answer:</h2>", unsafe_allow_html=True)
            st.markdown(answer, unsafe_allow_html=True)
    else:
        with col2:
            st.markdown("""
                <div style="text-align: center; margin-top: 150px;">
                <h1 style="margin-right:1rem;"> Project Guide </h1>
                    <h2>Hello,how can i assist you in this Project !?</h2>
                </div>
                """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
