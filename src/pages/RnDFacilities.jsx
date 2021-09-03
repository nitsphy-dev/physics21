import React, { useEffect } from "react";

import "./css/RnDFacilities.scss";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

const RnDFacilities = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <main className="rnd-facilities">
      <div className="heading title">R&amp;D Facilities</div>
      <Accordion className="rnd-accordion" defaultExpanded="true">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Departmental Research Facilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>UV - VIS NIR Spectrophotometer</li>
            <li>Hybrid Sputtering Unit</li>
            <li>
              Physical vapor deposition (Thermal evaporation, RF sputtering
              technique)
            </li>
            <li>
              Keithley 4200 semiconductor characterization equipped with 4 probe
              station
            </li>
            <li>Hand-Held Light Meter</li>
            <li>Ultrasonic Bath</li>
            <li>Microwave Oven</li>
            <li>Muffle furnace</li>
            <li>Hot Air Oven</li>
            <li>Analytical Balance</li>
            <li>Centrifuge</li>
            <li>Photocatalytic Reactor</li>
            <li>Peristaltic Pump</li>
            <li>pH meter</li>
            <li>Rotary Evaporator</li>
            <li>Low temperature photoconductivity chamber</li>
            <li>Programmable Spin Coating unit</li>
            <li>Horizontal Tubular Furnace</li>
            <li>
              Benchtop Research Grade Spectrofluorometer (Fluoromax-4) and solid
              sample holder
            </li>
            <li>Ultrasonic Bath Sonicator (3.5 L), 120 Wattage</li>
            <li>Vacuum Drying Oven</li>
            <li>Dual Channel Source Measuring Unit (SMU)</li>
            <li>Vacuum Pump</li>
            <li>Temperature Control System</li>
            <li>Weighing balance</li>
            <li>Electrometer/Source Meter</li>
            <li>Peristaltic Pump</li>
            <li>Thermal Evaporation unit</li>
            <li>De-ionized Water System</li>
            <li>UV Ozone Cleaner</li>
            <li>Digital Spinot</li>
            <li>Oil free vacuum pump</li>
            <li>Multispin motorless magnetic stirrer</li>
            <li>High Performing Computer (Paramshavak)</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </main>
  );
};

export default RnDFacilities;
