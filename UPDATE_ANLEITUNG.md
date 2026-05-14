# Leitfaden für zukünftige Updates (Landingpage)

Wenn der Befehl "aktualisieren" oder "Projekte updaten" gegeben wird, soll nach folgendem klaren und effizienten Ablauf vorgegangen werden:

## 1. Präzise Bestandsaufnahme (API-Abfrage)
* Statt den Browser zu nutzen, frage ich direkt über die GitHub API (oder das lokale Token) die Liste der Repositories ab. 
* Das dauert nur Sekunden und liefert eine zu 100 % genaue Liste (inklusive versteckter oder neuer Projekte).

## 2. Lokaler Abgleich
* Ich lese die aktuelle `index.html` im Ordner `g:\01_Meine Seiten Online` aus.
* Ich vergleiche die dortigen Projekt-Kacheln mit der exakten GitHub-Liste.

## 3. Gezielte Code-Anpassung
* Veraltete oder gelöschte Repositories entferne ich sofort aus dem Code.
* Neue Repositories füge ich als fertige Kachel mit dem passenden Link hinzu.

## 4. Direkter Upload (Deployment)
* Ich nutze das Terminal im entsprechenden Ordner für die Befehle:
  * `git add .`
  * `git commit -m "Update Projektliste"`
  * `git push origin main`
* Dadurch gehen die Änderungen sofort live.

## 5. Kurze Rückmeldung & Refresh-Hinweis
* Ich gebe Bescheid, dass der Upload erfolgreich war.
* **Wichtig:** Da GitHub Pages 1-2 Minuten Ladezeit für das Deployment haben kann, weise ich den Nutzer darauf hin, bei Bedarf **Strg + F5** (Hard Refresh) zu drücken, um den Browser-Cache zu umgehen.
