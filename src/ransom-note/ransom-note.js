export const canConstruct = function (ransomNote, magazine) {
	for (const char of magazine) {
		ransomNote = ransomNote.replace(char, "");
	}
	return !ransomNote;
};
