import time
import requests,json

def countdownset(h,lastm,sleep):
    while lastm >0:
        time.sleep(sleep)
        lastm -=1
        print(h,"H",lastm)
    h -=1
    while h >= 0:
        m = 60
        for i in range(60) :
            time.sleep(sleep)
            m -= 1
            print(h,"H",m)
        h -= 1

def weather(city):
    api_key ="111a6362c0e0a1c1e8f7ea43d48eec4b"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    complete_url = base_url + "appid=" + api_key + "&q=" + city
    response = requests.get(complete_url)
    x = response.json()
    y = x["main"]
    z = x["weather"]
    condition = z[0]["description"]
    return condition

def getFilmsFromApiWithSearchedText(text):
    global TMDB_API_TOKEN
    url = 'https://api.themoviedb.org/3/search/movie?api_key=' + TMDB_API_TOKEN + '&language=fr&query=' + text
    r = requests.get(url)
    film = r.json()
    return film


heure = 7
min = 55
#countdownset(heure,min,60)
kmsplus = 0
kmsmoins = 5521
Altitude = 119
vitesse = 0
flight_number = "IM 432"
dest = "Montreal"
destlow = dest.lower()
weather = weather(dest)
weatherurl = "http://api.openweathermap.org/data/2.5/weather?" + "appid=" + "111a6362c0e0a1c1e8f7ea43d48eec4b" + dest
urlbg = "../../static/styles/stylesimg/weather/"+ weather+".jpg"

TMDB_API_TOKEN = "5d6bf29b8d5dc0dddb07efa12631141a"