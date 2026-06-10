import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID= {
               'seeker_pro' : 'price_1TgghADgPZdSYiU5ngy9UasA',
               'seeker_premium' : 'price_1TgqXmDgPZdSYiU53im1Wjqn',
               'recruiter_growth' : 'price_1TgqZaDgPZdSYiU5ZXFma4Cg',
               'recruiter_enterprise' : 'price_1TgqanDgPZdSYiU5PvG2Jhmx'
}