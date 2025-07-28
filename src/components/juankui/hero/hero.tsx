'use client'
import { BookOpen, Calendar1, ChevronDown, Dice6, Gift, Star } from "lucide-react"
import { ButtonRipple, LinkRipple } from "../legacy/ripple-components"
import { VideoHero } from "../optionals/video-hero"
import Image from "next/image"
import { Post, Page, SiteSettings, Category } from '@/types/types'
import { decodeHtmlEntities, formatDate, limitCharacters } from "@/lib/utils"
import { Breadcrumbs } from "./breadcrumbs"
import { ParticlesFull } from "./particles"
import { AtroposCasinos } from "./atropos-hero"
import { Meteors } from "@/components/magicui/meteors"
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type HomeProps = SiteSettings & Page

export function HeroHomePage({ title, meta_title, meta_description, site_title, site_description }: HomeProps) {

  return (
    <section id="hero" className="relative flex  w-full flex-col items-center justify-center overflow-hidden ">
      <ParticlesFull />
      <Meteors number={30} />
      <VideoHero />
      <div
        className="w-full flex h-full flex-col items-center justify-center mb-0 pb-0 bg-transparent "
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)"
        }}
      >
        <div className="m-0 w-full h-[50vh] flex items-center justify-center">
          {
            <AtroposCasinos />
          }
          <div className="flex flex-col w-[60vw] items-start justify-start space-y-2  z-50">
            <div className="group/badge duration-400 w-fit flex flex-row items-center justify-center rounded-full bg-gradient-to-b transition">
              <Star size={18} className="mr-2 inline text-[var(--color-primary-light)]" />
              <p className="text-lg text-[var(--color-primary-light)] font-bold ">{site_title}</p>
            </div>
            <h1 className="text-white text-start text-5xl max-w-[800px] ml-0 pl-0">
              {site_title}
            </h1>
            <p className="text-white text-start md:text-[20px] font-normal max-w-[800px]">{site_description || meta_description}</p>

            <div className="flex flex-row items-center justify-center space-x-5 lg:py-5">
              <ButtonRipple className="rounded-full">
                New Casinos <Dice6 size={20} className="ml-2 inline" />
              </ButtonRipple>
              <LinkRipple href="#">
                Bonus <Gift size={20} className="ml-2 inline" />
              </LinkRipple>
            </div>
          </div>

        </div>

        <div className="relative w-full bottom-0 bg-transparent">
          <div className="relative w-full bottom-0 rotate-180 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="yes" viewBox="0 0 1000 100"><path d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z" fill="#F1F5F9"></path></svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroPage({ title, meta_description, breadcrumbs }: Page) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden pb-10">
      <ParticlesFull />
      <div className="w-full flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] via-[#6366f1] to-[#f59e42] ">
        <div className="m-0 w-full flex items-center justify-center gap-5 p-4 py-9 md:gap-9 md:px-8 lg:px-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col w-[70vw] items-center justify-center space-y-4 bg-white/10 rounded-2xl shadow-2xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="text-yellow-400 mr-2" size={32} />
            </div>
            <h1 className="text-white text-center md:text-[64px] font-inter md:leading-[72px] font-bold mb-4 md:mt-0 mt-2 text-[34px] leading-[44px] mx-auto flex w-full max-w-[873px] flex-col items-center drop-shadow-lg">
              {title}
            </h1>
            <p className="text-white/90 text-center md:text-[20px] md:leading-[28px] font-normal md:px-[86px] max-w-[700px]">
              {meta_description}
            </p>
            {breadcrumbs && (
              <Breadcrumbs className="flex justify-center mt-4" breadcrumbs={breadcrumbs} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function HeroPost({ title, excerpt, author_avatar, author_name, created_at, breadcrumbs, featured_image }: Post) {
  function BreadcrumbsFull() {
    return (
      <div className="flex flex-row items-center justify-center gap-3">
        {breadcrumbs && <Breadcrumbs className="flex justify-center" breadcrumbs={breadcrumbs} />}
      </div>
    )
  }
  function AuthorDate() {
    return (
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex w-max flex-row items-center justify-between space-x-3 rounded-full border border-[var(--color-primary-light)] bg-gradient-to-bl from-[var(--color-accent)] hover:to-[var(--color-primary)] px-3 pr-3 transition duration-500 hover:border-[var(--color-primary)] to-[var(--color-primary-semi-dark)]">
          <Calendar1 className="text-white" />
          <p className="text-gray-200 hover:text-white">{formatDate(created_at)}</p>
        </div>

        <div className="group-badge group mb-0 flex w-max flex-row items-center justify-between space-x-2 rounded-full border border-[var(--color-primary-light)] bg-gradient-to-br from-[var(--color-accent)] hover:to-[var(--color-primary)] pl-2 pr-3 transition duration-500 hover:border-[var(--color-primary)] to-[var(--color-primary-semi-dark)] lg:space-x-3">
          <div className="size-7 lg:size-10 relative mb-0 overflow-hidden rounded-full">
            <Image
              src={author_avatar || `https://api.dicebear.com/7.x/lorelei/svg?seed=${author_name || "default"}`}
              alt={`Image of ${author_name}`}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-200 [.group-badge:hover_&]:text-white">{author_name}</p>
        </div>
      </div>
    )
  }
  function TitleExcerpt() {
    return (
      <div className="flex flex-col w-full items-start justify-start gap-y-5">
        <h1 className="text-white text-[42px] text-start mb-0 p-0 font-bold flex w-full max-w-[873px]">{title}</h1>
        <p className=" text-white my-0 py-0 line-clamp-3">{decodeHtmlEntities(excerpt)}</p>
      </div>
    )
  }
  function FeaturedImage() {
    if (!featured_image) return null;
    return (
      <div className="relative w-full lg:w-1/3 h-48 sm:h-64 lg:h-[300px] mr-0 pr-0 flex-shrink-0">
        <Image
          src={featured_image}
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
    )
  }

  return (
    <section className="relative flex h-fit pb-20 pt-10 w-full flex-col items-center justify-start overflow-hidden">
      <ParticlesFull />
      <div
        className="absolute inset-0 z-0 h-full"
        style={{
          background: "linear-gradient(to top, #24243e, #302b63, #0f0c29)",
        }}
      />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container relative z-10 mx-auto w-[60vw]"
      >
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {featured_image && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="w-[350px] aspect-square relative rounded-full overflow-hidden shadow-2xl"
            >
              <Image
                src={featured_image}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          )}
          <div className="flex flex-col w-2/3 space-y-6">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            </motion.div>

            {/* Title & Excerpt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight text-start">
                {title}
              </h1>
              <p className="text-lg text-gray-300">
                {decodeHtmlEntities(limitCharacters(excerpt, 350))}
              </p>
            </motion.div>

            {/* Author & Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-stretch space-x-4"
            >
              <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                <div className="size-8 relative rounded-full overflow-hidden border-2 border-purple-400">
                  <Image
                    src={author_avatar || `https://api.dicebear.com/7.x/lorelei/svg?seed=${author_name}`}
                    alt={author_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white font-medium">{author_name}</span>
              </div>

              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                <Calendar1 className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{formatDate(created_at)}</span>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>


    </section >
  )
}

export function HeroCategory({ name, description, breadcrumbs }: Category) {
  return (
    <section className="relative flex h-[50vh] w-full flex-col items-center justify-center overflow-hidden">
      <ParticlesFull />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #000428, #004e92)",
          backgroundSize: "200% 200%",
          animation: "gradient 15s ease infinite",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            {name}
            <span className="inline-block ml-2">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
          >
            {description}
          </motion.p>

          {breadcrumbs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 w-full flex justify-center"
      >
        <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}