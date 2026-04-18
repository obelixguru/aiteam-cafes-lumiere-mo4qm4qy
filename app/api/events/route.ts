import { NextRequest, NextResponse } from 'next/server';

interface EventPayload {
  event: string;
  page?: string;
  plan?: string;
  step?: string;
  referrer?: string;
  timestamp?: string;
}

// AARRR funnel events
const VALID_EVENTS = [
  // Acquisition
  'page_view', 'blog_view', 'search_click',
  // Activation
  'pricing_view', 'plan_select', 'signup_start', 'signup_step2', 'signup_step3',
  // Retention
  'email_open', 'newsletter_signup', 'blog_subscribe',
  // Revenue
  'checkout_start', 'payment_success', 'plan_upgrade',
  // Referral
  'share_click', 'referral_visit'
];

export async function POST(request: NextRequest) {
  try {
    const body: EventPayload = await request.json();

    if (!body.event || !VALID_EVENTS.includes(body.event)) {
      return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
    }

    const event = {
      event: body.event,
      page: body.page || '/',
      plan: body.plan || null,
      step: body.step || null,
      referrer: body.referrer || request.headers.get('referer') || null,
      timestamp: body.timestamp || new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown',
    };

    // Log event (in production, store in Supabase)
    console.log('[Analytics]', JSON.stringify(event));

    return NextResponse.json({ ok: true, event: body.event });
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    funnel: {
      acquisition: ['page_view', 'blog_view', 'search_click'],
      activation: ['pricing_view', 'plan_select', 'signup_start', 'signup_step2', 'signup_step3'],
      retention: ['email_open', 'newsletter_signup', 'blog_subscribe'],
      revenue: ['checkout_start', 'payment_success', 'plan_upgrade'],
      referral: ['share_click', 'referral_visit'],
    },
    docs: 'POST /api/events with { event, page?, plan?, step?, referrer? }'
  });
}
