import requests
import os
print(os.getcwd())
resp = requests.post("http://127.0.0.1:5000/predict", files={'file': open('../../Desktop/test2.png', 'rb')})

print(resp.text)