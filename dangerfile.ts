import { danger, message, warn, fail } from 'danger'

const pr = danger.github.pr
const isUser = pr.user.type === 'User'
const files = danger.git.modified_files

// Enable danger only for users
if (isUser) {
    message('Hi there, thanks for contributing!')

    // Fail if no description
    if (pr.body.length === 0) {
        fail('Please add a description to your PR!');
    }

    // Checking if there is a changelog entry
    const hasChangelog = files.includes("CHANGELOG.md")

    if (!hasChangelog) {
        warn('You should add an entry into CHANGELOG.md!')
    }

    // Checking if the changes are too big
    if (files.length > 30) {
        warn('Please avoid big changes all at once unless it\'s absolutely necessary!')
    }

    const projectsChanges = files.filter(f => f.includes('projects'))
    if (projectsChanges.length) {
        const desktopChangesAndNoTests = projectsChanges.filter(
            f => f.includes('desktop') && f.includes('desktop/cypress')
        ).length === 0

        // Checking if the author wrote tests for desktop
        if (desktopChangesAndNoTests) {
            warn('Desktop changes but no cypress tests!')
        }

        const apiChangesAndNoTests = projectsChanges.filter(
            f => !f.includes('intermediary-') && f.includes('api') && f.includes('api/__tests__')
        ).length === 0

        // Checking if the author wrote tests for API
        if (apiChangesAndNoTests) {
            warn('API changes but no tests!')
        }
    }
}
