function test(string) {
  return string === "test";
}

function dueDate(req, filter) {
  let d1 = new Date(req.query.due_date);
  let d2 = new Date(d1.getTime() + 86399999);
  filter.due_date = [d1, d2];
}

function checkBox($target) {
  var ck = $target[0];
  var bt = $target.closest("tr").find("button.update-issue");
  if (ck.checked) bt[0].disabled = false;
  else bt[0].disabled = true;
}

module.exports = { test, dueDate, checkBox };
