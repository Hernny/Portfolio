import { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const staggerContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

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
