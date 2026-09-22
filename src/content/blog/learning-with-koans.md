---
title: 'Learning with koans'
author: 'Jon Abbott'
description: 'What programming koans are, where they came from, why I love them as a way to learn, and a few of my favourites across Ruby, Python, F#, and PowerShell.'
pubDate: 2026-09-22T19:30:00Z
tags:
  - learning
  - software engineering
  - programming
  - ruby
  - python
  - fsharp
  - powershell
---

I keep coming back to koans when I want to learn a language properly.

Not by watching a long course. Not by skimming a reference site. By sitting with small, deliberate failures until something clicks.

## What they are

In Zen Buddhism, a koan is a short puzzle or story meant to stop you leaning on tidy logic. You sit with it. You notice what it does to your thinking.

Programming koans borrow that spirit, then make it practical.

A typical set is a sequence of failing tests. Each one is a tiny lesson. You fill in a blank, fix an assertion, or nudge the code until the test goes green. Then the next one waits.

They are not tutorials that talk at you. They are exercises that talk _with_ you. The feedback loop is immediate. Wrong is useful. Right is earned.

That structure is what I like most. One idea at a time. Just enough friction. A path that rewards curiosity more than memorising.

## A brief history

The idea of a koan is old. The programming version is much newer.

The best known starting point for many of us is the [Ruby Koans](https://github.com/edgecase/ruby_koans), associated with Jim Weirich and EdgeCase. The pitch was simple: learn Ruby by making tests pass, one failing assertion at a time.

That pattern travelled well.

[Python Koans](https://github.com/gregmalcolm/python_koans) took the same approach into Python through TDD-style exercises. [F# Koans](https://github.com/ChrisMarinos/FSharpKoans) did it for F#. [PSKoans](https://github.com/PowerShellOrg/PSKoans) brought it into PowerShell with Pester.

Different languages. Same shape. Fail, think, fix, continue.

Once you have done one set, the others feel familiar even when the syntax is new. That familiarity is part of the gift.

## Why I love them as a form of learning

I learn best when I can poke at something.

Koans give me that. They do not ask me to absorb a chapter and hope it sticks. They ask me to do a small thing, see what breaks, and adjust.

A few reasons they work for me:

- **Tiny steps.** Each exercise is small enough that I can stay with it. I do not get lost in a big project before I understand the basics.
- **Honest feedback.** The test either passes or it does not. No vague sense that I “kind of get it”.
- **Discovery over declaration.** I often understand a language feature better when I stumble into it than when someone explains it first.
- **Safe struggle.** Being stuck is expected. The next prompt is right there. That makes frustration useful instead of demoralising.
- **Muscle memory.** After enough green tests, patterns start to feel natural. Not because I memorised them, but because I used them.

They also suit how my brain works. Short loops. Clear signals. Less reliance on long blocks of prose. More reliance on doing.

When I pick up a new language, or return to one I have not used in a while, koans are often my first stop. They rebuild intuition quickly.

## Some of my favourites

These are the sets I keep recommending.

### Ruby Koans

The classic. If you have never tried programming koans, start with the [Ruby Koans](https://github.com/edgecase/ruby_koans) or at least look at the shape of them. Ruby’s expressiveness makes the lessons feel playful without being shallow.

### Python Koans

A strong TDD-flavoured path through Python via [Python Koans](https://github.com/gregmalcolm/python_koans). Clear, approachable, and a good reminder that “simple” languages still have plenty worth exploring carefully.

### F# Koans

One of my favourites when I want to think functionally without drowning in abstraction. The [F# Koans](https://github.com/ChrisMarinos/FSharpKoans) nudge you toward F# idioms in a way that reading alone rarely does.

### PSKoans

PowerShell is easy to underestimate if you only use it for quick scripts. [PSKoans](https://github.com/PowerShellOrg/PSKoans) treats it like a real language, which is exactly the point. Pester keeps the feedback loop sharp.

## Worth sitting with

Koans will not replace real projects. They will not teach you every library or every production pain.

What they do well is quieter than that. They help you form a relationship with a language. They slow you down just enough. They make understanding something you build, not something you borrow.

If you are learning something new, or rediscovering something old, try a koan set before you reach for another long guide.

Sit with the failing test. Change one thing. See what happens.

That is where the learning lives.
