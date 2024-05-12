
import sys
import string
questions = {
    "What is the primary impact area of the project?": {
        "Education": 0.25,
        "Health": 0.25,
        "Environment": 0.20,
        "Economic Empowerment": 0.20,
        "Social Inclusion": 0.30
    },
    "Which target group does the project mainly serve?": {
        "Children (0-18 years)": 0.30,
        "Youth (19-24 years)": 0.25,
        "Adults (25-64 years)": 0.20,
        "Elderly (65+ years)": 0.20,
        "Disadvantaged communities": 0.35
    },
    "What is the project's reach in terms of beneficiaries?": {
        "Less than 100": 0.10,
        "100 to 1,000": 0.25,
        "1,000 to 10,000": 0.40,
        "10,000 to 100,000": 0.65,
        "More than 100,000": 1.00
    },
    "How does the project address gender equality?": {
        "Primarily focuses on women and girls": 0.40,
        "Equally benefits women, girls, men, and boys": 0.30,
        "Primarily focuses on men and boys": 0.20,
        "Not applicable or unsure": 0.10
    },
    "What is the project's stage of development?": {
        "Idea or planning stage": 0.10,
        "Pilot or prototype stage": 0.25,
        "Early implementation stage": 0.40,
        "Mature implementation stage": 0.60,
        "Scaling or replication stage": 0.80
    },
    "How does the project address environmental sustainability?": {
        "Directly addresses environmental issues": 0.40,
        "Partially addresses environmental issues": 0.25,
        "Has a neutral environmental impact": 0.10,
        "Not applicable or unsure": 0.00
    },
    "How innovative is the project's approach to solving social issues?": {
        "Highly innovative": 0.40,
        "Moderately innovative": 0.30,
        "Somewhat innovative": 0.20,
        "Not innovative": 0.10
    },
    "Does the project collaborate with other organizations to increase its impact?": {
        "Yes, collaborates with multiple organizations": 0.40,
        "Yes, collaborates with one or two organizations": 0.25,
        "No, but open to collaboration in the future": 0.10,
        "No, and does not plan to collaborate": 0.00
    },
    "What is the project's potential for long-term impact?": {
        "High potential": 0.40,
        "Moderate potential": 0.30,
        "Low potential": 0.20,
        "Unsure": 0.10
    },
    "How does the project address systemic issues in the community?": {
        "Directly addresses systemic issues": 0.40,
        "Indirectly addresses systemic issues": 0.25,
        "Does not address systemic issues": 0.10,
        "Unsure": 0.00
    },
    "How does the project promote community engagement and participation?": {
        "High level of community engagement": 0.40,
        "Moderate level of community engagement": 0.30,
        "Low level of community engagement": 0.20,
        "Unsure": 0.10
    }
}



def get_user_responses():
    user_responses = {}
    for question, options in questions.items():
        print(f"{question}")
        option_letters = list(string.ascii_lowercase[:len(options)])
        option_dict = {k: v for v, k in enumerate(option_letters)}
        for i, (option_key, option_value) in enumerate(options.items()):
            print(f"{option_letters[i]}. {option_key}")
        user_input = input(f"Enter your response (a-{option_letters[-1]}): ").strip().lower()
        while user_input not in option_letters:
            print("Invalid input. Please enter a valid response.")
            user_input = input(f"Enter your response (a-{option_letters[-1]}): ").strip().lower()
        selected_option = option_letters.index(user_input)
        user_responses[question] = list(options.keys())[selected_option]
    return user_responses







def calculate_impact_score(user_responses):
    total_score = 0
    for question, options in questions.items():
        selected_option = user_responses[question]
        option_weight = options.get(selected_option, 0)
        total_score += option_weight
    estimated_impact_score = total_score / len(questions)
    return estimated_impact_score

if __name__ == "__main__":
    user_responses = get_user_responses()
    estimated_impact_score = calculate_impact_score(user_responses)
    print("Estimated Impact Score:", estimated_impact_score)