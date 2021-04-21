module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['robot', 'animal', 'food']
    ],
    'jira-commit-rule': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-commit-rule': ({ subject }) => {
          const jiraCompleteRejex = /^\[([A-Z]){1,}-([0-9]){1,}\]/;
          const jiraPatternSearch = subject.search(jiraCompleteRejex);

          return [
            jiraPatternSearch !== -1,
            `Subject must begin with a Jira project and ID enclosed in brackets, ie [PROJ-123]`,
          ];
        }
      }
    }
  ],
};
