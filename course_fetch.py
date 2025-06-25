import requests
import json
import pandas as pd

#need to make into inputs instead of hardcoded values, dropdown? probably
term = "2258"
subject = "CSE"
catalog_nbr = "101" 

#url = f"https://my.ucsc.edu/PSIGW/RESTListeningConnector/PSFT_CSPRD/SCX_CLASS_LIST.v1/{term}?subject={subject}&catalog_nbr={catalog_nbr}"

url1 = "https://my.ucsc.edu/PSIGW/RESTListeningConnector/PSFT_CSPRD/SCX_CLASS_LIST.v1/2258?subject=CSE&catalog_nbr=101"
#2258 semester number, CSE subject, 101 catalog number

#Probably need to change prints to a different system for later display
try:
    response = requests.get(url1, timeout=10)
    response.raise_for_status() # Raise an error for invalid responses
    data = response.json()
except requests.exceptions.RequestException as err:
    print("Error occurred when fetching data.", err)
except requests.exceptions.JSONDecodeError as erj:
    print("Error occurred when decoding JSON response.", erj)
except requests.exceptions.Timeout as ert:
    print("Request timed out.", ert)
except requests.exceptions.HTTPError as erh:
    print("HTTP error occurred.", erh)
except requests.exceptions.ConnectionError as erc:
    print("Connection error occurred.", erc)
else:
    print("Successful Course Fetch.")

#prints out raw data from json
""" print(json.dumps(data, indent=2)) """

if not data.get("classes"):
    print("No classes found with provided information.")
else:
    #prints out the data in a readable format, need to change prints
    rows = []
    for course in data["classes"]:
        rows.append({
            "Subject": course["subject"],
            "Catalog #": course["catalog_nbr"],
            "Title": course["title"],
            "Days": course["meeting_days"],
            "Time": f"{course['start_time']} – {course['end_time']}",
            "Location": course["location"],
            "Instructor": ', '.join(i['name'] for i in course.get("instructors", [])),
            "Enrolled": f"{course['enrl_total']}/{course['enrl_capacity']}",
            "Waitlist": course["waitlist_total"]
        }) 
    print(pd.DataFrame(rows))
