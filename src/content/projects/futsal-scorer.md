---
title: FutsalScorer
summary: Apple Watch app for tracking live futsal scores on your wrist — tap to score, tap to undo — now with an optional iPhone companion for team setup and a live score mirror.
tech: ["Swift", "SwiftUI", "watchOS", "iOS", "WatchConnectivity", "Swift Concurrency", "@Observable"]
order: 3
---

## What it is

FutsalScorer is a watchOS app for keeping score during a futsal match. You configure
two teams of five players at the start, then tap a player's name to credit them a goal.
The scoreboard is always one glance away on your wrist. An own-goal button handles
unattributed goals, and per-player undo lets you fix a mis-tap without disrupting the
rest of the match record. The watch app is fully self-contained and works with no phone
nearby — an optional iPhone companion app adds a nicer way to set up a match and a
read-only live score view.

## Why I built it

During pickup futsal games I kept losing track of the score — and pulling out a phone
mid-game is awkward. The Apple Watch is already on my wrist, so a one-handed, glanceable
scorer was the obvious solution. I later added the iPhone companion because typing
player names on a watch screen between matches got old fast, and a phone on the sideline
is a better place to glance at the score than everyone crowding around one wrist.

## How it works

The watch app is built with SwiftUI for watchOS across three tabs:

1. **Scoreboard** — live score for both teams at a glance
2. **Team A scoring** — player list; tap to add a goal, tap undo to remove the last one
3. **Team B scoring** — same layout for the opposing team

The iPhone app talks to the watch over `WatchConnectivity`, with no iCloud account or
network required — it works entirely over the offline phone↔watch link. It adds:

- **Roster** — a remembered pool of player names, so you're not retyping the same
  five names before every match.
- **New Match** — build both team lineups from the roster (or type ad-hoc names) and
  tap "Start on Watch" to push the match straight to the watch, replacing whatever it
  was doing.
- **Live Score** — a read-only mirror of the watch's current score, updated in real
  time as goals are tapped in on the wrist.

Match state is shared between both apps through a small local Swift package
(`FutsalCore`) so the scoring logic can't drift between platforms. On the watch, state
is persisted to disk as JSON after every change, so an accidental wrist-drop or watch
restart never loses a goal. The persistence layer includes schema versioning: if a
future update changes the data format, old save files are detected and moved aside
(rather than silently overwritten) so no in-progress match is lost.

Haptics confirm each score tap. Both apps are localised in English and Italian.

## Screenshots

<!-- Replace the paths below with your actual screenshots once exported from the Watch simulator -->

![Scoreboard tab](/screenshots/futsal-scorer-scoreboard.png)

![Team scoring view with player list](/screenshots/futsal-scorer-scoring.png)

![Roster edit screen](/screenshots/futsal-scorer-roster.png)
