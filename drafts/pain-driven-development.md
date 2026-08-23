---
title: Pain-Driven Development
description: Pain-driven development is not neglect. It is often pragmatism with better timing.
date: 2026-08-23
status: draft
---

# Pain-Driven Development

Refactoring after a messy release. Tests after a regression. Monitoring after a late-night incident.

Pain-driven development, or PDD, is an informal label for a way of working where change happens when something hurts enough. It is not a formal methodology like Test-Driven Development or Domain-Driven Design. It is a pattern you notice in teams and codebases.

It sounds irresponsible. Sometimes it is. But it is not always wrong.

## What PDD actually is

You see PDD when refactoring only happens after a messy release. When tests appear after a nasty regression. When monitoring is added after an incident.

The team often knows the code could be cleaner. It works. It changes rarely. There is no time to rewrite it on principle alone. So change waits until the cost of leaving it alone is obvious.

That can look like neglect. It can also be a reasonable response to limited time and uncertain requirements.

## The problem with chasing principles too early

Most engineers know the classics: SOLID, Don't Repeat Yourself, You Aren't Gonna Need It, KISS. They are useful heuristics. They help manage change.

They are not laws.

Applied too early, or too rigidly, they create a different kind of pain. Not runtime failures. Design theatre.

You end up with:

- Interfaces for a single implementation
- Abstractions that hide nothing
- Configuration layers for behaviour that never changes
- Generic solutions to problems you might never have

That is speculative engineering. PDD pushes back against that instinct.

## Pain reveals real problems

Friction has a way of exposing what actually matters. The signal is evidence: repeated edits, diverging behaviour, defects, or delivery blocked by coupling.

### Duplication that was not really duplication

A team builds two endpoints that look similar. The validation logic overlaps. Someone suggests extracting a shared service to keep things DRY.

They wait.

Three months later, the business rules diverge. One endpoint adds new constraints. The other changes its workflow entirely.

If they had forced DRY too early, they would now be unpicking a shared abstraction that no longer fits either case. A small amount of duplication avoided locking in the wrong model.

### The interface that never needed to exist

A new payment provider integration ships. There is only one provider. The team debates an interface and multiple implementations to follow dependency inversion.

They decide not to.

A year passes. The provider does not change. No second provider appears. The simple concrete class was enough.

An early abstraction would have added ongoing complexity for flexibility they never used. PDD here meant waiting for actual variation before generalising.

### Testing where it hurts

A legacy reporting module has almost no automated tests. It works, mostly. It is ugly, but stable.

Rewriting it for purity would take weeks. Instead, the team adds tests only around the parts they actively change. Each time a bug appears, they lock it down with a new test.

Over time, the high-risk areas become well covered. The stable areas remain untouched. It is not textbook. It is focused. Pain guided the investment.

## Principles work best when anchored to experience

The danger is not the principles themselves. The danger is applying them without context.

SOLID makes more sense after you have felt the pain of tight coupling. DRY becomes real after you fix the same bug in five places. YAGNI feels obvious after building a framework nobody used. KISS lands properly once you have wrestled with accidental complexity.

Pain turns abstract rules into practical judgement. Without that experience, principles become cargo cult practices: followed because they sound right, not because they solve a real problem.

That does not mean ignoring principles until everything is on fire. It means letting real friction calibrate when they apply.

## The difference between reactive and reckless

Defending PDD is not the same as defending neglect.

There is a difference between:

- Ignoring clear warning signs
- Waiting for meaningful signals

If change is frequent and risky, invest early. If duplication is spreading and already diverging, extract. If coupling is blocking delivery, refactor.

If something is stable, rarely touched, and easy to understand, forcing it into a clean architecture might create more problems than it solves.

The key question is not "Does this follow SOLID?" It is "Where will this hurt if we leave it like this?"

## Pain as a prioritisation tool

Time is finite. Attention is limited. Not every imperfection deserves immediate correction.

PDD, at its best, acts as a prioritisation filter. It asks:

- What is actually slowing us down?
- What is causing real defects?
- What is stressing the team?
- What is blocking change?

Fix those first. Leave the rest alone until it earns your attention. That does not mean you never refactor. It means you refactor with purpose.

## A balanced view

The goal is not to live in constant firefighting. Chronic pain leads to burnout and brittle systems. Eliminating all discomfort is not realistic either. Some friction is the price of moving fast.

Healthy teams sit somewhere in the middle. They do not chase purity for its own sake. They do not ignore obvious design debt. They let real problems shape their architecture. They use principles as tools, not trophies.

Pain-driven development sounds like a criticism. Sometimes it is. Other times, it is pragmatism with better timing.

In a world full of over-engineered systems, a little well-timed pain can be surprisingly clarifying.
