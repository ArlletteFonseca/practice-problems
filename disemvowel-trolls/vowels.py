def disemvowel(string_):
    VOWELS = ["a", "e", "i", "o", "u"]
    print(VOWELS)
    NEW = []
    for i in range(0, len(string_)):
        if string_[i] == VOWELS[i]:
            NEW.append(string_[i])
        print(NEW)
    return string_



