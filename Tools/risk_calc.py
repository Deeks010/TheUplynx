def calculate_risk_assessment():
    # Initialize risk factors
    market_risk = int(input("On a scale of 1 to 10, how stable is the market for your project? "))
    technical_risk = int(input("On a scale of 1 to 10, how complex is the technology involved in your project? "))
    regulatory_risk = int(input("On a scale of 1 to 10, how uncertain are the regulatory requirements for your project? "))
    financial_risk = int(input("On a scale of 1 to 10, how secure is the financial backing for your project? "))

    # Calculate total risk score
    total_risk_score = market_risk + technical_risk + regulatory_risk + financial_risk

    # Determine risk level
    if total_risk_score <= 15:
        risk_level = "Low"
        risk_description = "This project has a low level of risk."
    elif total_risk_score <= 25:
        risk_level = "Medium"
        risk_description = "This project has a moderate level of risk."
    else:
        risk_level = "High"
        risk_description = "This project has a high level of risk."

    # Display risk assessment
    print("\nRisk Assessment Results:")
    print("Risk Level:", risk_level)
    print("Risk Description:", risk_description)

# Call the function to start calculating risk assessment
calculate_risk_assessment()
