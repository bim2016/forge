function test(string) {
  return string === "test";
}

function dueDate(req, filter) {
  let d1 = new Date(req.query.due_date);
  let d2 = new Date(d1.getTime() + 8639999);
  filter.due_date = [d1, d2];
}

module.exports = { test, dueDate };
