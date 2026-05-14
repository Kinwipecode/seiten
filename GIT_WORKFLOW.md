# 🚀 GitHub Update & Workflow Guide

Dieser Leitfaden beschreibt den standardisierten Prozess für Git-Updates und Code-Synchronisation. Er ist so konzipiert, dass er universell in verschiedenen Projekten eingesetzt werden kann.

---

## 🛠 Standard Workflow (Daily)

Um den Code konsistent und sicher zu halten, sollte dieser 3-Schritte-Zyklus eingehalten werden:

### 1. Lokal vorbereiten (Pull)
Bevor Änderungen vorgenommen werden, immer den neuesten Stand vom Server holen:
```powershell
git pull origin main
```

### 2. Änderungen dokumentieren (Commit)
Nachdem die Arbeit erledigt ist, werden die Dateien für den Upload vorbereitet:
```powershell
# Alle Änderungen hinzufügen
git add .

# Aussagekräftige Nachricht schreiben
git commit -m "feat: beschreibe hier die neue Funktion" 
# oder
git commit -m "fix: beschreibe den behobenen Fehler"
```

### 3. Veröffentlichen (Push)
Die lokalen Änderungen auf GitHub hochladen:
```powershell
git push origin main
```

---

## 🌿 Branching Strategy (Optional)

Für größere Features oder Experimente empfiehlt es sich, in einem eigenen "Zweig" zu arbeiten:

1. **Branch erstellen:** `git checkout -b feature-name`
2. **Arbeiten & Committen:** Wie oben beschrieben.
3. **Zurück zum Hauptzweig:** `git checkout main`
4. **Zusammenführen:** `git merge feature-name`
5. **Hochladen:** `git push origin main`

---

## 🌐 Deployment (GitHub Pages)

Falls das Projekt über GitHub Pages gehostet wird:

* **Live-Status:** Änderungen sind meist innerhalb von 1-2 Minuten nach dem `push` sichtbar.
* **Cache-Probleme:** Wenn Änderungen nicht sofort sichtbar sind, im Browser **STRG + F5** (Hard Refresh) drücken.
* **Build-Prozess:** Bei Frameworks (React, Next.js, etc.) sicherstellen, dass der `build`-Befehl erfolgreich war, bevor der `dist` oder `out` Ordner hochgeladen wird.

---

## 🆘 Troubleshooting

| Problem | Lösung |
| :--- | :--- |
| **Merge Konflikt** | Git zeigt an, welche Dateien betroffen sind. Die Konflikte manuell in der Datei lösen, speichern und erneut `add`, `commit`, `push` ausführen. |
| **Falscher Commit** | `git reset --soft HEAD~1` macht den letzten Commit rückgängig, behält aber die Änderungen in den Dateien. |
| **Remote-Änderungen** | Wenn der Push abgelehnt wird, liegt es oft an Änderungen auf GitHub. Erst `git pull` ausführen. |

---

> [!TIP]
> **Gute Commit-Nachrichten:** Verwende Präfixe wie `feat:`, `fix:`, `docs:`, `style:` oder `refactor:`. Das macht die Historie für alle Beteiligten (und KI-Assistenten) leichter lesbar.
