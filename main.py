import requests
category = 'happiness'
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'VqTJH5iFm+eaVMB2Eibyyw==lXktjEyf3sGpOEBf'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
