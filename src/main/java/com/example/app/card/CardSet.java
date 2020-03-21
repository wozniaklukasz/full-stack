package com.example.app.card;

public enum CardSet {
    TEST_TEMPORARY("TEST_TEMPORARY"),
    CORE("CORE"),
    EXPERT1("EXPERT1"),
    HOF("HOF"),
    REWARD("REWARD"),
    MISSIONS("MISSIONS"),
    DEMO("DEMO"),
    NONE("NONE"),
    CHEAT("CHEAT"),
    BLANK("BLANK"),
    DEBUG_SP("DEBUG_SP"),
    PROMO("PROMO"),
    NAXX("NAXX"),
    FP1("FP1"),
    GVG("GVG"),
    PE1("PE1"),
    BRM("BRM"),
    FP2("FP2"),
    TGT("TGT"),
    PE2("PE2"),
    TEMP1("TEMP1"),
    CREDITS("CREDITS"),
    HERO_SKINS("HERO_SKINS"),
    TB("TB"),
    SLUSH("SLUSH"),
    LOE("LOE"),
    OG("OG"),
    OG_RESERVE("OG_RESERVE"),
    KARA("KARA"),
    KARA_RESERVE("KARA_RESERVE"),
    GANGS("GANGS"),
    GANGS_RESERVE("GANGS_RESERVE"),
    UNGORO("UNGORO"),
    ICECROWN("ICECROWN"),
    LOOTAPALOOZA("LOOTAPALOOZA"),
    GILNEAS("GILNEAS"),
    BOOMSDAY("BOOMSDAY"),
    TROLL("TROLL"),
    DALARAN("DALARAN"),
    TAVERNS_OF_TIME("TAVERNS_OF_TIME"),
    ULDUM("ULDUM"),
    DRAGONS("DRAGONS"),
    YEAR_OF_THE_DRAGON("YEAR_OF_THE_DRAGON"),
    BLACK_TEMPLE("BLACK_TEMPLE"),
    WILD_EVENT("WILD_EVENT"),
    BATTLEGROUNDS("BATTLEGROUNDS");

    private String cardSet;

    CardSet(String cardSet) {
        this.cardSet = cardSet;
    }

    public String getCardSet() {
        return cardSet;
    }
}
