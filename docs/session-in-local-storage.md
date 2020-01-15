Can it be okay to store a session in `localStorage`?
====================================================

Jonathan Gros-Dubois about  https://dev.to/jondubois.
Here it is (the reply): https://dev.to/jondubois/comment/373l,
below is a copy (from 2019-12-06),
Copyright Jonathan Gros-Dubois, quad licensed under CC-By 3.0, CC-By 4.0, Apache 2 and MIT. [1]

<blockquote>
One problem with the article is that the words 'never' and 'always' are used way too often.

Also, the article says that localStorage is insecure quite often but doesn't give any evidence or examples.

I would argue that localStorage is as secure as cookies (including httpOnly cookies).

localStorage uses essentially the same security policy as cookies; one of its core principles is that a domain cannot access localStorage data that was created under a different domain so there is no chance that a website could steal data from a different website.

Also, httpOnly cookies do not make your site any less vulnerable to XSS attacks; if the attacker manages to inject a malicious script into your front end, then they can use that script to make HTTP requests to your server (directly from the victim's browser) and your precious httpOnly cookie (containing the user's valid session ID) will be attached to every request so the server will service them without suspecting anything.

The only real difference is that if the token (e.g. JWT) is in localStorage then the attacker can steal the token to use later (same goes for regular non-httpOnly cookies BTW)... Which is hardly a convenience because it's more advantageous for the attacker to carry-out the attack in-place from the victim's browser rather than from the attacker's own machine (thus allowing their IP to be traced directly).

Also, with JWTs, it's good practice to set short expiry dates. If you're using WebSockets you can even issue JWTs with 10 minute expiry (for example) and re-issue a new one automatically every 8 minutes if the user is still connected and logged in; then when the user logs out or becomes disconnected; their last issued JWT will become invalid in only 10 minutes (at which point it becomes completely useless to an attacker).

Also, it's not recommended practice to store large amounts of data inside a JWT because of the overhead of having to send it with every request/connection.
</blockquote>


Another reply about this, also by Jonathan Gros-Dubois:
https://dev.to/jondubois/comment/3749


[1] I (KajMagnus) asked Jonathan via email if I could inclue the comment, and
Jonathan replied "Feel free to use my comment for your project under whatever license it is"
— so then I (KajMagnus) quad licened it as per above.