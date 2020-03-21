package com.example.app.card;

public enum CardClass {
    DEATHKNIGHT("DEATHKNIGHT"),
    DREAM("DREAM"),
    DRUID("DRUID"),
    HUNTER("HUNTER"),
    MAGE("MAGE"),
    NEUTRAL("NEUTRAL"),
    PALADIN("PALADIN"),
    PRIEST("PRIEST"),
    ROGUE("ROGUE"),
    SHAMAN("SHAMAN"),
    WARLOCK("WARLOCK"),
    WARRIOR("WARRIOR"),
    WHIZBANG("WHIZBANG");

    private String cardClass;

    CardClass(String cardClass) {
        this.cardClass = cardClass;
    }

    public String getCardClass() {
        return cardClass;
    }
}
