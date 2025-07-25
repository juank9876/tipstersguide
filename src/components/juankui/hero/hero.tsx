import { Calendar1, Dice6, Gift, Star } from "lucide-react"
import { ButtonRipple, LinkRipple } from "../legacy/ripple-components"
import { VideoHero } from "../optionals/video-hero"
import Image from "next/image"
import { Post, Page, SiteSettings, Category } from '@/types/types'
import { decodeHtmlEntities, formatDate } from "@/lib/utils"
import { Breadcrumbs } from "./breadcrumbs"
import { ParticlesFull } from "./particles"
import { AtroposCasinos } from "./atropos-hero"

type HomeProps = SiteSettings & Page

export function HeroHomePage({ title, meta_title, meta_description, site_title, site_description }: HomeProps) {

  return (
    <section id="hero" className="relative flex h-[50vh] w-full flex-col items-center justify-center overflow-hidden mb-10">
      <ParticlesFull />
      <VideoHero />
      <div className="w-full flex h-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary)] ">
        <div className="m-0 w-full flex items-center justify-center  p-4 py-9 md:gap-9 md:px-8 lg:px-12 lg:py-20">

          {
            <AtroposCasinos />
          }
          <div className="flex flex-col w-full items-center justify-center space-y-2">
            <div className=" group/badge duration-400 w-fit flex flex-row items-center justify-center rounded-full bg-gradient-to-b from-[var(--color-primary-semi-dark)] hover:to-[var(--color-accent)] px-5 transition to-[var(--color-primary)]">
              <Star size={18} className="mr-2 inline text-[var(--color-accent-light)]" />
              <p className="text-lg text-muted font-bold group-hover/badge:text-white">{site_title}</p>
            </div>
            <h1 className="text-white text-center md:text-[64px] font-inter md:leading-[72px] font-bold mb-4 md:mt-0 mt-2 text-[34px] leading-[44px] mx-auto flex w-full max-w-[873px] flex-col items-center">
              {site_title}
            </h1>
            <p className="text-white text-center md:text-[20px] md:leading-[28px] font-normal md:px-[86px]">{site_description || meta_description}</p>

            <div className="flex flex-row items-center justify-center space-x-5 lg:py-5">
              <ButtonRipple className="rounded-full">
                New Casinos <Dice6 size={20} className="ml-2 inline" />
              </ButtonRipple>
              <LinkRipple href="#">
                Bonus <Gift size={20} className="ml-2 inline" />
              </LinkRipple>
            </div>
          </div>

          <div
            className="h-[16px] w-full overflow-hidden rotate-180 absolute bottom-0 z-10 bg-transparent"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQ0IiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgNTQ0IDE3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01NDMuNSAyLjM3MjA0TDUyOS42NjEgMTEuODYwNEw1MjIuMTQ4IDIuMzcyMDRMNDg4LjE0NCA1LjkzMDJMNDgyLjIxMyA4LjY5NzY1TDQ0OC42MDQgOC42OTc2NUw0NDIuNjczIDUuOTMwMkw0MjYuNDYxIDguNjk3NjZMNDA0LjcxNCAyLjM3MjA1TDM1NC40OTggMTEuODYwNUwzMzUuNTE5IDIuMzcyMDZMMzIyLjg2NiA1LjkzMDIxTDMxMy43NzIgMi4zNzIwNkwzMDIuMzA1IDE3TDI4MC41NTggNS45MzAyMkwyNDAuNjIzIC0zLjQ1NTY4ZS0wNUwxNzQuNTkxIDExLjg2MDVMMTU0LjQyNSAyLjM3MjA3TDg5LjU3OTcgMTQuMjMyNkw4NC44MzQ4IDUuOTMwMjNMNDcuNjY3MSAxNC4yMzI2TC03LjI5MzU4IC0xLjI4ODMzZS0wNUwtNTQuNzQxNyAxNC4yMzI2TC03Ni44ODQyIDIuMzcyMDlMLTg1Ljk3ODQgMTEuODYwNUwtMTAyLjE5IC00LjU4NzE2ZS0wNkwtMTIyLjM1NSAxNy4wMDAxTC0xMzIuMjQgNS45MzAyNUwtMTYxLjUgNS45NzkwMWUtMDdMLTEwMi4xOSAtNC41ODcxNmUtMDZMLTcuMjkzNTggLTEuMjg4MzNlLTA1TDI0MC42MjMgLTMuNDU1NjhlLTA1TDU0My41IC02LjEwMzUyZS0wNUw1NDMuNSAyLjM3MjA0WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==")',
              backgroundColor: "transparent",
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export function HeroPage({ title, meta_description, breadcrumbs }: Page) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden pb-10">
      <ParticlesFull />
      <div className="w-full flex h-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary)] ">
        <div className="m-0 w-full flex items-center justify-center gap-5 p-4 py-9 md:gap-9 md:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col w-[70vw] items-center justify-center space-y-2">
            <h1 className="text-white text-center md:text-[64px] font-inter md:leading-[72px] font-bold mb-4 md:mt-0 mt-2 text-[34px] leading-[44px] mx-auto flex w-full max-w-[873px] flex-col items-center">
              {title}
            </h1>
            <p className=" text-white text-center md:text-[20px] md:leading-[28px] font-normal md:px-[86px]">{meta_description}</p>
            {breadcrumbs && <Breadcrumbs className="flex justify-center" breadcrumbs={breadcrumbs} />}
          </div>
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
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <ParticlesFull />
      <div
        className="w-full flex h-full flex-col items-center justify-start"
        style={{
          background: "linear-gradient(to top, #24243e, #302b63, #0f0c29)",
        }}
      >
        <div className="m-0 w-full lg:w-[60vw] h-[40vh] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 pt-10 lg:px-0 px-5">
          {/* Imagen destacada */}
          <FeaturedImage />
          {/* Bloque de información */}
          <div className="flex flex-col w-full lg:w-2/3 items-start justify-start gap-y-5">
            <BreadcrumbsFull />
            <TitleExcerpt />
            <AuthorDate />
          </div>
        </div>

      </div>
    </section>
  )
}

export function HeroCategory({ name, description, breadcrumbs }: Category) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden pb-10">
      <ParticlesFull />
      <div className="w-full flex h-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary)] ">
        <div className="m-0 w-full flex items-center justify-center gap-5 p-4 py-9 md:gap-9 md:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col w-[50vw] items-center justify-center space-y-2">
            <h1 className="text-white text-center md:text-[64px] font-inter md:leading-[72px] font-bold mb-4 md:mt-0 mt-2 text-[34px] leading-[44px] mx-auto flex w-full max-w-[873px] flex-col items-center">
              {name}
            </h1>
            <p className=" text-white text-center md:text-[20px] md:leading-[28px] font-normal md:px-[86px]">{description}</p>
            {breadcrumbs && <Breadcrumbs className="flex justify-center" breadcrumbs={breadcrumbs} />}
          </div>
        </div>
      </div>
    </section>
  )
}