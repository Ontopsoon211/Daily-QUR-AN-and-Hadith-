import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Daily Qur’an & Hadith</Text>

                  <View style={styles.card}>
                          <Text style={styles.title}>Today’s Qur’an Verse</Text>
                                  <Text style={styles.content}>
                                            “Indeed, with hardship comes ease.” (Qur’an 94:6)
                                                    </Text>
                                                          </View>

                                                                <View style={styles.card}>
                                                                        <Text style={styles.title}>Today’s Hadith</Text>
                                                                                <Text style={styles.content}>
                                                                                          The Prophet ﷺ said: “Actions are judged by intentions.”
                                                                                                  </Text>
                                                                                                        </View>

                                                                                                              <Text style={styles.footer}>
                                                                                                                      Stay consistent. Build your spiritual discipline daily.
                                                                                                                            </Text>
                                                                                                                                </ScrollView>
                                                                                                                                  );
                                                                                                                                  }

                                                                                                                                  const styles = StyleSheet.create({
                                                                                                                                    container: {
                                                                                                                                        flexGrow: 1,
                                                                                                                                            backgroundColor: "#0f172a",
                                                                                                                                                padding: 20,
                                                                                                                                                  },
                                                                                                                                                    header: {
                                                                                                                                                        fontSize: 28,
                                                                                                                                                            fontWeight: "bold",
                                                                                                                                                                color: "#f8fafc",
                                                                                                                                                                    textAlign: "center",
                                                                                                                                                                        marginBottom: 20,
                                                                                                                                                                          },
                                                                                                                                                                            card: {
                                                                                                                                                                                backgroundColor: "#1e293b",
                                                                                                                                                                                    padding: 16,
                                                                                                                                                                                        borderRadius: 12,
                                                                                                                                                                                            marginBottom: 16,
                                                                                                                                                                                              },
                                                                                                                                                                                                title: {
                                                                                                                                                                                                    fontSize: 18,
                                                                                                                                                                                                        fontWeight: "bold",
                                                                                                                                                                                                            color: "#38bdf8",
                                                                                                                                                                                                                marginBottom: 8,
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                    content: {
                                                                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                                                                            color: "#e2e8f0",
                                                                                                                                                                                                                                lineHeight: 24,
                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                    footer: {
                                                                                                                                                                                                                                        marginTop: 20,
                                                                                                                                                                                                                                            textAlign: "center",
                                                                                                                                                                                                                                                color: "#94a3b8",
                                                                                                                                                                                                                                                    fontSize: 13,
                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                      });