package com.example.app.card;


import org.springframework.lang.Nullable;

public class Card {
    private String id;
    private String imageUrl;
    private String name;
    private String text;
    private String flavor;
    private Long attack;
    @Nullable
    private CardClass cardClass;
    private Long cost;
    private Long health;
//    private String[] mechanics;
    private String rarity;
    private CardSet set;
    private String type;

    public Card(String id,
                String imageUrl,
                String name,
                String text,
                String flavor,
                Long attack,
                CardClass cardClass,
                Long cost,
                Long health,
//                String[] mechanics,
                String rarity,
                CardSet set,
                String type) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.text = text;
        this.flavor = flavor;
        this.attack = attack;
        this.cardClass = cardClass;
        this.cost = cost;
        this.health = health;
//        this.mechanics = mechanics;
        this.rarity = rarity;
        this.set = set;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getFlavor() {
        return flavor;
    }

    public void setFlavor(String flavor) {
        this.flavor = flavor;
    }

    public Long getAttack() {
        return attack;
    }

    public void setAttack(Long attack) {
        this.attack = attack;
    }

    public CardClass getCardClass() {
        return cardClass;
    }

    public void setCardClass(CardClass cardClass) {
        this.cardClass = cardClass;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public Long getHealth() {
        return health;
    }

    public void setHealth(Long health) {
        this.health = health;
    }

//    public String[] getMechanics() {
//        return mechanics;
//    }
//
//    public void setMechanics(String[] mechanics) {
//        this.mechanics = mechanics;
//    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
    }

    public CardSet getSet() {
        return set;
    }

    public void setSet(CardSet set) {
        this.set = set;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
