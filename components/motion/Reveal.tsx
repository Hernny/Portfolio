import { PropsWithChildren, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const staggerContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

// Slide + fade variants to support "repliegue" effect to both sides
export const slideFade: Variants = {
  hiddenLeft: { opacity: 0, x: -24 },
  hiddenRight: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

type MotionDivProps = React.ComponentProps<typeof motion.div>;

export function Reveal(
  { children, delay = 0, className, amount = 0.6, once = true, ...rest }:
  PropsWithChildren<{ delay?: number; amount?: number; once?: boolean; className?: string } & MotionDivProps>
) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { delay } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn(
  { children, delay = 0, className, amount = 0.6, once = true, ...rest }:
  PropsWithChildren<{ delay?: number; amount?: number; once?: boolean; className?: string } & MotionDivProps>
) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * SlideInOut: Animates children from left/right with fade when entering the viewport
 * and retracts back to the same side when leaving (not once-only).
 *
 * direction:
 * - 'left' or 'right' to force a side
 * - 'auto' alternates by index (even: left, odd: right)
 */
export function SlideInOut(
  {
    children,
    className,
    direction = 'auto',
    index = 0,
    amount = 0.6,
    delay = 0,
    ...rest
  }:
  PropsWithChildren<{
    className?: string;
    direction?: 'left' | 'right' | 'auto';
    index?: number;
    amount?: number;
    delay?: number;
  } & MotionDivProps>
)
{
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount, margin: '0px 0px -10% 0px' });

  const hiddenKey = direction === 'left'
    ? 'hiddenLeft'
    : direction === 'right'
    ? 'hiddenRight'
    : (index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight');

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenKey}
      animate={inView ? 'show' : (hiddenKey as any)}
      variants={slideFade}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
