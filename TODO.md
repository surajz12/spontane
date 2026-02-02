# Spontane Project To-Do List 🚀

### Email & Domain Optimization
- [ ] **Unify SPF Records**: Merge Titan and Resend SPF records in GoDaddy.
    - *Current Recommendation*: `v=spf1 include:spf.titan.email include:amazonses.com ~all`
- [ ] **Add DMARC Record**: Crucial for avoiding spam filters in Gmail/Outlook.
    - *Record Type*: `TXT`
    - *Host/Name*: `_dmarc`
    - *Value*: `v=DMARC1; p=none;`
- [ ] **Verify DKIM for Titan**: Ensure GoDaddy has the DKIM records provided by Titan for better sender reputation.
- [ ] **Deliverability Test**: Send test emails from both the website (Resend) and the Inbox (Titan) to [Mail-Tester.com](https://www.mail-tester.com) and fix any flagged issues.
- [ ] **Domain Warming**: Manually send emails to personal accounts and mark them as "Not Spam" to build domain trust.

### Automation & Features
- [ ] **Monitor Beta Confirmation**: Check Vercel logs periodically to ensure Google Form submissions are still successfully firing the API.
- [ ] **Monitor Waitlist Signups**: Ensure Supabase and Resend are syncing correctly for all new users.

---
*Last Updated: February 2, 2026*
