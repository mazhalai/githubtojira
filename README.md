# Github issue to Jira issue

This extension helps to create Jira tickets from github issues.

### Prerequisites:
- User must be logged into to Jira

### Default Values:
- Issue type = bug
- Priority = P2
- Severity = 2-Major
- Version = "Milestone 12"

## Install using .crx
- Download domain appropriate .crx file from this repo.
- Open `chrome://extensions/` in your chrome browser and enable Developer Mode.
- Drag and drop this file into `chrome://extensions/` page in chrome browser.
- Click "Add Extension"
- Magento icon should show up next to URL bar (depending on how many other extensions are installed)

## To Use
- Navigate to a specific issue on https://github.com/magento/magento2/issues
- Click on the extension.
- New tab with Jira is opened with the following values filled:
-- Title
-- Priority
-- Severity
-- Affected Domain
-- Labels
-- Version
-- Reporter (logged in user)
-- Description with link of github issue and contents
- User fills mandatory field components, adds or changes other related information and clicks create.

## TODOs
- Auto tag github issues with domain and "acknowledged"
- Auto comment with jira ticket.