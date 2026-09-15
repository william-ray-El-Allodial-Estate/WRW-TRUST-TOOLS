/* instrument-predicate.js — the enforcement Ray directed (2026-09-15).
 *
 * These generators report ON an underlying instrument. A form with a real
 * instrument behind it, reported first, is a form used correctly. A form on a
 * name and an amount with nothing behind it is a false statement. This guard
 * makes the predicate REQUIRED: the generator refuses to produce a form until
 * the instrument is identified, described, and reported first.
 *
 * Usage per page:
 *   1) <script src="instrument-predicate.js"></script>
 *   2) call INSTRUMENT_FIELDSET() to inject the required block into the form
 *      (or paste the markup), and
 *   3) at the TOP of the generate function:  if (!requireInstrument()) return;
 *   4) append instrumentClause() to the generated output so the form carries
 *      its predicate forward.
 */
(function (w) {
  var FIELDS = [
    ["ip_ref",   "Instrument reference / registry number (e.g. CER-1880.2 record no.)", "the instrument this form reports on", "text"],
    ["ip_desc",  "Instrument description", "what the instrument is — note, bond, claim, contract", "text"],
    ["ip_date",  "Reported first — date the instrument was recorded", "", "date"],
    ["ip_where", "Reported first — where (the registry / filing it was recorded in BEFORE this form)", "where the instrument was reported first", "text"]
  ];

  w.INSTRUMENT_FIELDSET = function () {
    var h = '<fieldset id="instrument_predicate" style="border:2px solid #b00;padding:.8em;margin:1em 0;background:#fff8f8">'
      + '<legend><strong>Underlying instrument — required</strong></legend>'
      + '<p style="font-size:.9em;color:#600;margin:.2em 0 .7em">This form <em>reports on</em> a real instrument. It will not generate without one identified, described, and reported first. A form with nothing behind it is a false statement, not a filing.</p>';
    FIELDS.forEach(function (f) {
      h += '<label for="' + f[0] + '">' + f[1] + '</label>'
        + '<input id="' + f[0] + '" type="' + f[3] + '"'
        + (f[2] ? ' placeholder="' + f[2] + '"' : '') + ' style="width:100%;margin:.2em 0 .6em;padding:.5em">';
    });
    return h + '</fieldset>';
  };

  w.requireInstrument = function () {
    var missing = [];
    var v = {};
    FIELDS.forEach(function (f) {
      var el = document.getElementById(f[0]);
      var val = (el && el.value ? el.value : "").trim();
      v[f[0]] = val;
      if (!val) missing.push(f[1].split("(")[0].split("—")[0].trim().toLowerCase());
    });
    if (missing.length) {
      var msg = "⛔ REFUSED — no underlying instrument.\n\nMissing: " + missing.join("; ")
        + ".\n\nThis form reports on an instrument that must EXIST and be REPORTED FIRST. "
        + "Identify it, describe it, and record where it was reported before this form. "
        + "A form generated on a name and an amount with nothing behind it is a false statement, not a filing.";
      var o = document.getElementById("output") || document.getElementById("result") || document.getElementById("bondOutput");
      if (o) { o.textContent = msg; o.style.color = "#b00"; } else { alert(msg); }
      var fs = document.getElementById("instrument_predicate");
      if (fs) fs.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    w.__instrument = v;
    return true;
  };

  // Clause to append to generated output so the form carries its predicate.
  w.instrumentClause = function () {
    var v = w.__instrument || {};
    return "\n\nUNDERLYING INSTRUMENT (reported first):\n"
      + "  Reference: " + (v.ip_ref || "") + "\n"
      + "  Description: " + (v.ip_desc || "") + "\n"
      + "  Reported: " + (v.ip_date || "") + " at " + (v.ip_where || "") + "\n"
      + "  This form reports on the instrument above; it does not create value of its own.";
  };
})(window);
