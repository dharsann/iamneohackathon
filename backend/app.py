from flask import Flask,request,jsonify
import openai
import random
import pandas as pd

app=Flask(__name__)
openai.api_key="sk-proj-OaQXq1rFPtB1MxpRScgpT3BlbkFJkK3Hgph5nPT5zyyz87MF"

dataset=pd.read_csv(r"C:\Users\Dharsann\OneDrive\Documents\IamNeoHack\Sample Questions.csv")

@app.route('/generate-question',methods=['POST'])
def generate_question():
    prompt=random.choice(dataset['question-data'].tolist())

    if not prompt:
        return jsonify({'error':'No prompt provided'}),400
    
    try:
        response=openai.ChatCompletion.create(
            model="text-davinci-004",
             messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150
        )
        question=response.choices[0].message['content'].text.strip()
        
        return jsonify({'question':question})
    except Exception as e:
        return jsonify({'error':str(e)}),500
    
if __name__=='__main__':
    app.run(debug=True)

