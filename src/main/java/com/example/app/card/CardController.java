package com.example.app.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CardController {
    private CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/rest/cards")
    public List<Card> getCards() {
        return cardService.getCards();
    }

    @GetMapping("/rest/cards/{id}")
    public Card getCard(@PathVariable String id) {
        return cardService.getCard(id);
    }
}
