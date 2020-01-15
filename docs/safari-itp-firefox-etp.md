
Safari ITP and Firefox ETP block 3rd party cookies
==================================================

And sometimes Safari might delete all local storage.


ITP 2.3
-------

Deletes local storage etc of target website, if via link w query params?
https://www.cognetik.com/blog/new-changes-and-challenges-for-analysts-safari-introduces-itp-2-3/
Because trackers started using LocalStorage instead of cookies.

Safari 13 on macOS includes ITP Debug Mode

> website.example will be marked for non-cookie website data deletion if the user is navigated from a domain classified with cross-site tracking capabilities to a final URL with a query string and/or a fragment identifier, such as website.example?clickID=0123456789

https://digiday.com/marketing/wtf-apples-itp-2-3-update/:

> If Safari sees that a company that it classifies as a cross-site tracker has decorated the link that a person clicks to visit another website, then it will delete all the non-cookie-based website data for that website from the person’s browser after seven days in which the person has continued to use Safari but not visited the site since clicking that link


ITP 2.2
-------

ITP 2.2 (Apr 24, 2019) deletes a cookie after one day, if:
- Cookie set via js (i.e. document.cookie), and
- The site that sent the user to the landing page (via an ad link?)
  seems to be able to do cross-site-tracking  [how?], and
- The link (which link? The ad link?) has a query string or url fragment,
  indicating some tracking params are sent.

Apple also blocks 1st party cookies that looks like tracking cookies —
because advertisers started using 1st party cookies insetad, when 3rd party
cookies got that much blocked.

- https://impact.com/partnerships/safaris-done-it-again-what-you-need-to-know-about-itp-2-2/
- https://webkit.org/blog/8828/intelligent-tracking-prevention-2-2/


ITP 2.0
-------

ITP 2.0 (June 2018): Apple blocks what it think is third-party tracking cookies immediately.
Previously, with ITP 1.0, those cookies were allowed for 24 hours.
See: https://impact.com/partnerships/what-does-itp-2-0-mean-for-you-2/

