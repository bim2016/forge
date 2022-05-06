function test(string) {
  return string === "test";
}

function dueDate(req, filter) {
  let d1 = new Date(req.query.due_date);
  let d2 = new Date(d1.getTime() + 86399999);
  filter.due_date = [d1, d2];
}

const defaultFilter = {
  status:
    "draft,open,answered,work_completed,ready_to_inspect,in_dispute,not_approved",
};

module.exports = { test, dueDate, defaultFilter };
