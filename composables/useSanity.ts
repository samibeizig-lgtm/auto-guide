import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'ztwm4can',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-01-01',
})

const builder = imageUrlBuilder(client)

export const useSanityClient = () => client

export const sanityImage = (source: any) =>
  builder.image(source).auto('format').url()

// Fetch toutes les voitures
export const fetchCars = () =>
  client.fetch(`*[_type == "car"] | order(brand->name asc) {
    _id, model, year, price, priceOccasion, category, fuel, transmission,
    power, torque, engine, displacement, cylinders, consumption,
    consumptionUrban, consumptionExtraUrban, emissions, range,
    acceleration, topSpeed, seats, doors, driveType, warranty, warrantyBattery,
    length, width, height, wheelbase, weight, trunkVolume, trunkVolumeMax,
    rating, available, description, features, options, pros, cons,
    abs, esp, isofix, tpms, airbags, accAdaptive, lka, aebs, bsd,
    fatigueDetect, autonomousLevel, cameraRear, camera360, parkingSensors,
    parkAssist, touchscreen, digitalCluster, hud, gps, androidAuto,
    appleCarplay, wirelessCharger, soundSystem, climateZones, heatedSeats,
    ventilatedSeats, electricSeats, panoramicRoof, keyless, electricHandbrake,
    drivingModes, ledHeadlights, adaptiveHeadlights, wheelSize, sportKit,
    "brand": brand->name,
    "brandColor": brand->color,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
  }`)

// Fetch toutes les marques
export const fetchBrands = () =>
  client.fetch(`*[_type == "brand"] | order(name asc) {
    _id, name, country, color,
    "logo": logo.asset->url,
  }`)

// Fetch tous les articles
export const fetchArticles = () =>
  client.fetch(`*[_type == "article"] | order(date desc) {
    _id, title, "slug": slug.current, excerpt, category, author, date, readTime, tags,
    "image": mainImage.asset->url,
    content,
  }`)

// Fetch une voiture par id Sanity
export const fetchCarById = (id: string) =>
  client.fetch(`*[_type == "car" && _id == $id][0] { ... }`, { id })
