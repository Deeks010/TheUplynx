# Get user input for the questions
def ROI():
    rev_streams = input("What are the project's revenue streams? ")
    rev_proj = float(input("What are the projected revenues for the next 3-5 years? "))
    cost_est = float(input("What are the estimated costs for the next 3-5 years? "))
    inv_amt = float(input("What is the investment amount required? "))
    prof_timeline = int(input("What is the expected timeline for achieving profitability (in years)? "))    

    # Calculate net profit
    net_prof = rev_proj - cost_est

    # Calculate ROI
    roi = (net_prof / inv_amt) * 100

    # Calculate payback period
    payback_period = inv_amt / net_prof * prof_timeline

    return net_prof,roi,payback_period
