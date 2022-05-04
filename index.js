function test(string) {
  return string === "test";
}

function dueDate(req, filter) {
  let d1 = new Date(req.query.due_date);
  let d2 = new Date(d1.getTime() + 86399999);
  filter.due_date = [d1, d2];
}

async function getAllIssues(filter) {
  let page = {
    limit: 200,
    offset: 0,
  };
  let allIssues = [];
  if (allIssues.length === 0) {
    let issues = await req.bim360.listIssues(issue_container, filter, page);
    let pageTmp = JSON.parse(JSON.stringify(page));
    let offset = 0;
    allIssues = [...issues];
    while (issues.length > 0) {
      offset += page.limit;
      pageTmp.offset = offset;
      issues = await req.bim360.listIssues(issue_container, filter, pageTmp);
      allIssues = [...allIssues, ...issues];
    }
    allIssues.sort((a, b) => b.identifier - a.identifier);
  }
  return allIssues;
}

module.exports = { test, dueDate, getAllIssues };
