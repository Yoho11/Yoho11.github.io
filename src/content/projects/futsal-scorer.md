---
title: FutsalScorer
summary: Apple Watch app for tracking live futsal scores on your wrist — tap to score, tap to undo, no phone needed.
tech: ["Swift", "SwiftUI", "watchOS", "Swift Concurrency", "@Observable"]
order: 3
---

## What it is

FutsalScorer is a watchOS-only app for keeping score during a futsal match. You configure
two teams of five players at the start, then tap a player's name to credit them a goal.
The scoreboard is always one glance away on your wrist. An own-goal button handles
unattributed goals, and per-player undo lets you fix a mis-tap without disrupting the
rest of the match record.

## Why I built it

During pickup futsal games I kept losing track of the score — and pulling out a phone
mid-game is awkward. The Apple Watch is already on my wrist, so a one-handed, glanceable
scorer was the obvious solution. I also used the project as a focused exercise in building
a self-contained watchOS app with proper data persistence.

## How it works

The app is built entirely with SwiftUI for watchOS — there is no companion iPhone app.
The UI lives across three tabs:

1. **Scoreboard** — live score for both teams at a glance
2. **Team A scoring** — player list; tap to add a goal, tap undo to remove the last one
3. **Team B scoring** — same layout for the opposing team

Match state is persisted to disk as JSON after every change, so an accidental wrist-drop
or watch restart never loses a goal. The persistence layer includes schema versioning:
if a future update changes the data format, old save files are detected and moved aside
(rather than silently overwritten) so no in-progress match is lost.

Haptics confirm each score tap. The app is localised in English and Italian.

## Screenshots

<!-- Replace the paths below with your actual screenshots once exported from the Watch simulator -->

![Scoreboard tab](/screenshots/futsal-scorer-scoreboard.png)

![Team scoring view with player list](/screenshots/futsal-scorer-scoring.png)

![Roster edit screen](/screenshots/futsal-scorer-roster.png)
