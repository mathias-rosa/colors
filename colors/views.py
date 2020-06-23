import os
from flask import Flask, render_template
from flask import send_from_directory

from .utils import *

app = Flask(__name__)
app.config.from_object('config')


@app.route('/favicon.ico')
def fav():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico')

@app.route('/')
def index():
    return render_template('start/start.html',
                           flight_number=flight_number,
                           )


#fr--------------------------------------------------------------------------------

@app.route('/fr/main/')
def mainfr():
    return render_template('fr/main.html',
                           flight_number=flight_number,
                           min=min,
                           heure=heure,
                           kmsplus = kmsplus,
                           kmsmoins = kmsmoins,
                           Altitude = Altitude,
                           vitesse = vitesse,
                           urlbg=urlbg,
                           dest = dest,
                           weather = weather,
                           destlow = destlow,
                           )


@app.route('/fr/internet/')
def fr_internet():
    return render_template('/fr/app/internet.html',
                           )
@app.route('/fr/flightmap/')
def fr_flightmap():
    return render_template('/fr/app/flightmap.html',
                           )

@app.route('/fr/videogames/')
def fr_videogames():
    return render_template('/fr/app/videogames.html',
                           )

@app.route('/fr/cinema/')
def fr_cinema():
    return render_template('/fr/app/cinema.html',
                           )

#cinemafr----------------------------------------------------------------------------------

@app.route('/fr/cinema/details/<movie>')
def fr_cinema_details(movie):
    return render_template('/fr/app/cinema_details.html',
                            movie = movie,
                           )

#------------------------------------------------------------------------------------------
@app.route('/fr/music/')
def fr_music():
    return render_template('/fr/app/music.html',
                           )  

@app.route('/fr/weather/')
def fr_weather():
    return render_template('/fr/app/weather.html',
                           )    

#en---------------------------------------------------------------------------------

@app.route('/en/main/')
def mainen():
    return render_template('en/main.html',
                           flight_number= flight_number,
                           min=min,
                           heure=heure,
                           kmsplus=kmsplus,
                           kmsmoins=kmsmoins,
                           Altitude=Altitude,
                           vitesse=vitesse,
                           urlbg=urlbg,
                           dest = dest,
                           weather = weather,
                           destlow = destlow,
                           )


@app.route('/en/internet/')
def en_internet():
    return render_template('/en/app/internet.html',
                           )
@app.route('/en/flightmap/')
def en_flightmap():
    return render_template('/en/app/flightmap.html',
                           )

@app.route('/en/videogames/')
def en_videogames():
    return render_template('/en/app/videogames.html',
                           )

@app.route('/en/cinema/')
def en_cinema():
    return render_template('/en/app/cinema.html',
                           )

#cinemaen----------------------------------------------------------------------------------

@app.route('/en/cinema/details/<movie>')
def en_cinema_details(movie):
    return render_template('/en/app/cinema_details.html',
                            movie = movie,
                           ) 

#------------------------------------------------------------------------------------------                          

@app.route('/en/music/')
def en_music():
    return render_template('/en/app/music.html',
                           )                                                  

@app.route('/en/weather/')
def en_weather():
    return render_template('/en/app/weather.html',
                           )                       

#es---------------------------------------------------------------------------------

@app.route('/es/main/')
def maines():
    return render_template('es/main.html',
                           flight_number="IM 432",
                           min=min,
                           heure=heure,
                           kmsplus=kmsplus,
                           kmsmoins=kmsmoins,
                           Altitude=Altitude,
                           vitesse=vitesse,
                           urlbg=urlbg,
                           dest = dest,
                           weather = weather,
                           )

@app.route('/es/internet/')
def es_internet():
    return render_template('/es/app/internet.html',
                           )
@app.route('/es/flightmap/')
def es_flightmap():
    return render_template('/es/app/flightmap.html',
                           )

@app.route('/es/videogames/')
def es_videogames():
    return render_template('/es/app/videogames.html',
                           )

@app.route('/es/cinema/')
def es_cinema():
    return render_template('/es/app/cinema.html',
                           )

#cinemaes----------------------------------------------------------------------------------

@app.route('/es/cinema/details/<movie>')
def es_cinema_details(movie):
    return render_template('/es/app/cinema_details.html',
                            movie = movie,
                           )                          

#------------------------------------------------------------------------------------------

@app.route('/es/music/')
def es_music():
    return render_template('/es/app/music.html',
                           )                                                  
@app.route('/es/weather/')
def es_weather():
    return render_template('/es/app/weather.html',
                           )    


#global-------------------------------------------------------------------


#if __name__ == "__main__":
#    app.run()