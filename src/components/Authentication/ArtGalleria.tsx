"use client";

import { Galleria } from 'primereact/galleria'
import CreditCard from "@/assets/Authentication/CreditCard.jpg"
import Skating from "@/assets/Authentication/Skating.jpg"
import Organization from "@/assets/Authentication/Organization.jpg"

export default function ArtGalleria() {
  return (
    <div className="relative" id="auth-galeria">
      <Galleria value={[CreditCard.src, Skating.src, Organization.src]}
        showThumbnails={false}
        showIndicators
        showIndicatorsOnItem
        autoPlay
        className="relative h-dvh"
        item={(data) => {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt="" src={data} className="w-full h-dvh rounded object-cover" />
          )
        }
        }
      />
    </div >
  )
}
