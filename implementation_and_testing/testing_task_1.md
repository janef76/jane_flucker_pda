require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 # card.value should be compared (==) not assigned
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # spelling error should be (def) and need a comma to separate the variables
  if card1.value > card2.value
    return card.name # no .name method, should be returning card1.
  else
    card2 # should have return in front of card2 to maintain consistency
  end
end
end # end statement should be at the bottom to end the class, also the tabs/indentation doesn't affect the code but more readable if indented properly.

def self.cards_total(cards)
  total # should be assigned to 0
  for card in cards
    total += card.value
    return "You have a total of" + total # needs to be placed out with the for loop and total returned to a string, a space should be added to 'of"' to make it more readable.
  end
end
