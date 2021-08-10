import { T } from "@mojang/t-component"
import React, { useState } from "react"
import { Checkbox } from "../.."

const GeneralPage = () => {
  const langs = ['en-US', 'pt-PT', 'pt-BR', 'es-ES']

  return (
    <form>
      <div className="dropdowns">
        <div className='dropdown'>
          <h3><T>Language</T></h3>
          <div className='temp-div'>{langs.find(l => l === localStorage.getItem('lang'))}</div>
        </div>

        <div className='dropdown'>
          <h3><T>Launcher color theme</T></h3>
          <div className='temp-div'></div>
        </div>

        <div className='dropdown'>
          <h3><T>Launcher theme</T></h3>
          <div className='temp-div'></div>
        </div>
      </div>

      <h3><T>Launcher settings</T></h3>
      <Checkbox value={false}><T>Show beta version of the Launcher</T></Checkbox>
      <Checkbox value={true}><T>Keep the Launcher open while games are running</T></Checkbox>
      <Checkbox value={false}><T>Animate transitions between pages in the Launcher</T></Checkbox>
      <Checkbox value={false}><T>Animate play button on the Play pages in the Launcher</T></Checkbox>
      <Checkbox value={true}><T>Show Advanced information when installaing packages</T></Checkbox>

      <h3><T>Minecraft: Java Edition settings</T></h3>
      <Checkbox value={false}><T>Open output log when Minecraft: Java Edition starts</T></Checkbox>
      <Checkbox value={true}><T>Automatically send Minecraft: Java Edition crash reports to Mojang Studios</T></Checkbox>
      <Checkbox value={true}><T>Show historical versions of Minecraft: Java Edition in the Launcher</T></Checkbox>

      <h3><T>Shortcut settings</T></h3>
      <Checkbox value={false}><T>Hide Java Edition launcher shortcut</T></Checkbox>
      <Checkbox value={false}><T>Close Launcher when switching launchers</T></Checkbox>
      <Checkbox value={true}><T>Enable Minecraft Dungeons Support (WIP)</T></Checkbox>

      <h3><T>External launcher settings</T></h3>
      <Checkbox value={false}><T>Show external launcher shortcut</T></Checkbox>
    </form>
  )
}

export default GeneralPage
