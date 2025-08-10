# Cal.com Integration Documentation

This documentation explains how to set up and configure the Cal.com booking system for your design-dev portfolio.

## Prerequisites

1. **Cal.com Account**: You need an active Cal.com account
   - Sign up at [cal.com](https://cal.com) if you don't have one
   - Complete your profile setup including timezone and availability

## Cal.com Setup

### 1. Create Event Types

Set up the following event types in your Cal.com dashboard:

#### Consultation Event
- **Name**: `consultation`
- **Duration**: 15-30 minutes
- **Description**: "Free consultation to discuss your project needs"
- **Location**: Video call (Google Meet, Zoom, or Cal.com's built-in video)

#### Project Discussion Event
- **Name**: `project-discussion`
- **Duration**: 45-60 minutes
- **Description**: "Detailed project planning and requirement gathering session"
- **Location**: Video call

### 2. Configure Your Availability

1. Go to **Availability** in your Cal.com dashboard
2. Set your working hours
3. Configure buffer times between meetings
4. Set up any recurring unavailable times

### 3. Customize Booking Page

1. Go to **Settings** > **Profile**
2. Upload a professional profile photo
3. Write a compelling bio
4. Set your timezone

## Environment Configuration

### 1. Update Environment Variables

Edit the `.env` file in your project root:

```env
# Replace 'your-calcom-username' with your actual Cal.com username
VITE_CALCOM_USERNAME=your-actual-username

# Match these with your Cal.com event type slugs
VITE_CALCOM_CONSULTATION_EVENT=consultation
VITE_CALCOM_PROJECT_EVENT=project-discussion

# Optional: If using a custom domain
VITE_CALCOM_NAMESPACE=

# Theme preference
VITE_CALCOM_THEME=light
```

### 2. Find Your Cal.com Username

Your username is found in your Cal.com booking URL:
- If your booking link is `https://cal.com/johndoe/consultation`
- Then your username is `johndoe`

## Testing the Integration

### 1. Development Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test each booking button:
   - Hero section "Book a call" (consultation)
   - Navigation "Book a call" (consultation)
   - Footer "Book a call" (project-discussion)

3. Verify that:
   - Modal opens correctly
   - Cal.com embed loads
   - Booking flow works end-to-end
   - External link fallback works

### 2. Production Testing

After deploying:
1. Test on different devices (mobile, tablet, desktop)
2. Test different browsers
3. Verify email notifications work
4. Test calendar integrations

## Customization Options

### Booking Types

The integration supports three booking types:
- `consultation`: Short consultation calls
- `project-discussion`: Longer project planning sessions
- `general`: Default fallback

### Styling

The booking buttons inherit your existing design system:
- Hero: Primary black button
- Navigation: Ghost button with special styling
- Footer: Secondary white button

### Modal vs Popup

Currently configured to use modal overlay for better UX. To switch to popup:

```typescript
// In BookingButton.tsx, replace the handleClick function:
const handleClick = () => {
  openCalcomPopup(finalCalLink);
};
```

## Troubleshooting

### Common Issues

1. **"Cal.com username not configured" warning**
   - Update `VITE_CALCOM_USERNAME` in your `.env` file
   - Restart your development server

2. **Booking modal doesn't load**
   - Check browser console for errors
   - Verify your Cal.com event types exist
   - Try the external link fallback

3. **Styling issues**
   - Check for CSS conflicts
   - Verify Tailwind classes are properly applied
   - Test in different browsers

### Environment Variables Not Loading

Make sure your `.env` file is in the project root and variables start with `VITE_`:

```env
# ✅ Correct
VITE_CALCOM_USERNAME=johndoe

# ❌ Incorrect (missing VITE_ prefix)
CALCOM_USERNAME=johndoe
```

## Advanced Configuration

### Custom Event Types

To add more booking types:

1. Create the event type in Cal.com
2. Add it to the `eventTypeMap` in `client/lib/calcom.ts`:

```typescript
export const eventTypeMap: Record<BookingType, string> = {
  consultation: 'consultation',
  'project-discussion': 'project-discussion',
  'technical-review': 'technical-review', // New type
  general: '15min',
};
```

3. Update the `BookingType` type in `client/types/calcom.ts`

### Custom Domains

If using a custom Cal.com domain:

```env
VITE_CALCOM_NAMESPACE=yourcompany
```

This will generate links like `https://yourcompany.cal.com/username/event`

## Support

For Cal.com specific issues:
- [Cal.com Documentation](https://docs.cal.com)
- [Cal.com Support](https://cal.com/support)

For integration issues:
- Check browser console for errors
- Review the implementation in `client/lib/calcom.ts`
- Test with external Cal.com links first
