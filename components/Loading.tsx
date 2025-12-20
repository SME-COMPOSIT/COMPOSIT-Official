'use client'

import { motion } from 'framer-motion'
import React from 'react'

const Loading = () => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#130707] to-black text-white">
			{/* Ambient glow */}
			<motion.div
				aria-hidden
				className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#5c0a0a]/30 blur-3xl"
				animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
				transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
			/>
			<motion.div
				aria-hidden
				className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"
				animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
				transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
			/>

			<div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
				<div className="relative flex flex-col items-center gap-8 text-center">
					{/* Orbital scene */}
					<div className="relative h-48 w-48">
						<motion.div
							className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
							animate={{ rotate: 360 }}
							transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
						/>

						<motion.div
							className="absolute inset-4 rounded-full border border-[#5c0a0a]/30"
							animate={{ rotate: -360 }}
							transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
						/>

						<motion.div
							className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-[#5c0a0a]/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(92,10,10,0.35)]"
							animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 6, 0] }}
							transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
						/>
					</div>

					{/* Copy */}
					<div className="space-y-2">
						<motion.p
							className="text-sm uppercase tracking-[0.35em] text-white/70"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
						>
							Initializing experience
						</motion.p>
						<motion.h1
							className="text-3xl font-semibold tracking-tight sm:text-4xl"
							animate={{ letterSpacing: ['0.1em', '0.25em', '0.1em'] }}
							transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
						>
							Loading ...
						</motion.h1>
					</div>

					{/* Progress line */}
					<div className="relative h-1 w-56 overflow-hidden rounded-full bg-white/10">
						<motion.span
							className="absolute left-0 top-0 h-full w-24 rounded-full bg-gradient-to-r from-white via-[#5c0a0a] to-white"
							animate={{ x: ['-30%', '120%'] }}
							transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Loading
