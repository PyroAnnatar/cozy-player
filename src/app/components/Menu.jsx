import React from "react";

const Menu = ({ selected, handleChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mb-4 border-2 rounded p-2">
      <input
        className=""
        type="radio"
        id="campfire"
        name="campfire"
        onChange={handleChange}
        value="https://www.youtube.com/embed/mWonAu_4-R0?si=9reJeb5SNey42jlD"
        checked={
          selected ===
          "https://www.youtube.com/embed/mWonAu_4-R0?si=9reJeb5SNey42jlD"
        }
      />
      <label htmlFor="campfire">Campfire</label>
      <input
        className=""
        type="radio"
        id="huron"
        name="huron"
        onChange={handleChange}
        value="https://www.youtube.com/embed/KtlgYxa6BMU?si=8y121p4G7ESq3ROb"
        checked={
          selected ===
          "https://www.youtube.com/embed/KtlgYxa6BMU?si=8y121p4G7ESq3ROb"
        }
      />
      <label htmlFor="huron">Lord Huron</label>
      <input
        className=""
        type="radio"
        id="radiohead"
        name="radiohead"
        onChange={handleChange}
        value="https://www.youtube.com/embed/Bf01riuiJWA?si=ya2iQzOab8Z79QH6"
        checked={
          selected ===
          "https://www.youtube.com/embed/Bf01riuiJWA?si=ya2iQzOab8Z79QH6"
        }
      />
      <label htmlFor="radiohead">Radiohead</label>
      <input
        className=""
        type="radio"
        id="bluessaraceno"
        name="bluessaraceno"
        onChange={handleChange}
        value="https://www.youtube.com/embed/rcN7Bx6dxpw?si=zOO6xloDw0zo-t1Z"
        checked={
          selected ===
          "https://www.youtube.com/embed/rcN7Bx6dxpw?si=zOO6xloDw0zo-t1Z"
        }
      />
      <label htmlFor="bluessaraceno">Blues Saraceno</label>
      <input
        className=""
        type="radio"
        id="theanimals"
        name="theanimals"
        onChange={handleChange}
        value="https://www.youtube.com/embed/N4bFqW_eu2I?si=quC7QPozReAfSLnO"
        checked={
          selected ===
          "https://www.youtube.com/embed/N4bFqW_eu2I?si=quC7QPozReAfSLnO"
        }
      />
      <label htmlFor="theanimals">The Animals</label>
      <input
        className="absolute bottom-10 right-10 "
        type="radio"
        id="secret"
        name="secret"
        onChange={handleChange}
        value="https://www.youtube.com/embed/dQw4w9WgXcQ?si=yOdoceUwzi5-8pkX&autoplay=1"
        checked={
          selected ===
          "https://www.youtube.com/embed/dQw4w9WgXcQ?si=yOdoceUwzi5-8pkX&autoplay=1"
        }
      />
      <label htmlFor="secret" className="absolute bottom-14 right-[44px]">
        ?
      </label>
    </div>
  );
};

export default Menu;
