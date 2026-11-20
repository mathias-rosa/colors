# colors

In-flight entertainment demo app (Flask) — cinema, music, flight map, weather, in fr / en / es.

## Run (uv)

```bash
uv sync
uv run flask --app colors run
```

Then open http://127.0.0.1:5000/

## Production

```bash
uv run gunicorn colors:app
```
