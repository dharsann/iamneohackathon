import requests

url = 'http://127.0.0.1:5000/generate-question'
headers = {'Content-Type': 'application/json'}
data = {
    'prompt': 'What is AI?'
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
