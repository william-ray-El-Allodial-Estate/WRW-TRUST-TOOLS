# About the Form Generators in This Repository

*Design, constraints, and intended use*

## Summary

This repository contains browser-based tools that help a person fill out standard government forms. Each tool takes the information a user types in and arranges it into the layout of an existing form — an IRS information return, a Treasury or GSA form, and so on. The tools produce a filled-out document on the user's own screen. They file nothing, send nothing to any agency, and calculate no entitlement. What a user does with a document afterward is the user's own responsibility, subject to the same law that governs any paper form bought from a stationer or downloaded from a government website.

## The forms are the government's, not this project's

The generators reproduce forms that already exist and that the government publishes: among them the IRS Form 1099-OID, 1099-A, 1096, and Schedule K-1; IRS Form 8281; and the Standard Form bonds (SF-24, SF-25, SF-25A and related). These are established forms with published instructions. This project did not create them and does not alter what they mean. A tool here is a fill-in aid for an existing form — nothing about using one of these tools is different, in kind, from typing into the PDF the issuing agency distributes.

## The instrument predicate

An information return reports on something. A 1099-OID reports original issue discount on a debt instrument that exists; an 8281 registers an obligation that exists; a bond form documents a bond that exists. The reported thing comes first; the form describes it.

The information-return generators in this repository are built to enforce exactly that order. Before any such tool will produce a form, it requires the user to identify the underlying instrument the form reports on — what it is, its reference or number, its date, and where it is recorded or held. If those fields are left blank, the tool does not proceed. It displays a refusal and produces no document.

This is the design principle of the suite, and it is deliberate. The tools are built on the premise that a form reporting an instrument is only meaningful when there is an instrument to report.

## What the tools refuse to do

Stated plainly, so there is no room to read more into them than is there:

- They do not create value, money, credit, or any financial instrument.
- They do not discharge, offset, or settle any debt.
- They do not generate, claim, or process a refund.
- They do not transmit anything to the IRS, the Treasury, or any other agency; there is no submission function.

A form filled in with nothing behind it is a false statement, and the information-return generators are built to prevent one — by refusing to produce a form when the user cannot identify a real instrument for it to report. A tool whose central feature is that it will not generate a baseless form is not, and cannot be, a mechanism for filing one.

## The disclaimers each tool carries

Every information-return generator displays a four-part notice: what the tool is, what it is not, who should use it, and that it is not tax or legal advice. The remaining tools display a general notice that they prepare a document from what the user enters and are not legal, tax, or financial advice.

Preparing a form correctly is not the same thing as a filing being correct. These tools do not give advice, do not review anyone's facts, and create no preparer, attorney, or advisory relationship with anyone who uses them. A user with a real question about their own situation should consult a licensed preparer or attorney before filing anything.

## Who the tools are for

The intended user is a person or entity that holds or has issued a real instrument and needs to report it on the correct form. A user without an underlying instrument is not served by these tools: on the information-return generators, the software will not produce a form at all. That is the point of the design, and it is the honest answer to anyone examining what this repository does.
