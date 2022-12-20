import React from "react";
import Character from "./Character";
import { View } from "react-native";

const Characters = () => {
  return (
    <View style={{ marginTop: 220 }}>
      <Character
        name="Mona"
        description="Astrologist Mona Megistus, alternatively Mona Megistus,
              the Astrologist, is a playable Hydro character in Genshin Impact.
              An astrologist of knowledgeable skill and high pride, Mona has
              settled in Mondstadt to avoid suffering the ire of her master
              after unwittingly reading the latter's diary."
        image_src="https://res.cloudinary.com/dtbk6m3ig/image/upload/v1671532039/mona_f9wd3k.png"
      />
      <Character
        name="Hu Tao"
        description="Hu Tao's antics and eccentricity belies her role as the 77th Director of the Wangsheng Funeral Parlor and her talent as a poet. Nevertheless, she treats the parlor's operations with utmost importance, and holds funeral ceremonies with the highest dignity and solemnity."
        image_src="https://res.cloudinary.com/dtbk6m3ig/image/upload/v1666076359/1129086_w7esum.png"
      />
      <Character
        name="Zhongli"
        description="A consultant of the Wangsheng Funeral Parlor, he is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal."
        image_src="https://res.cloudinary.com/dtbk6m3ig/image/upload/v1671533055/zhongli_genshin_impact_character_render_by_deg5270_deeqrmg-fullview.png_fp60x4.png"
      />
    </View>
  );
};

export default Characters;
