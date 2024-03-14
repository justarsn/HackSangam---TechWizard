
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;




public class MainActivity extends AppCompatActivity {

    private EditText usernameEditText, passwordEditText;
    private Button loginButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // Initialize UI components
        usernameEditText = findViewById(R.id.editTextUsername);
        passwordEditText = findViewById(R.id.editTextPassword);
        loginButton = findViewById(R.id.buttonLogin);

        // Set onClickListener for login button
        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Check login credentials (dummy data for illustration)
                if (isValidLogin()) {
                    // Start SlotsActivity if login is successful
                    startActivity(new Intent(MainActivity.this, SlotsActivity.class));
                } else {
                    // Show a toast or handle unsuccessful login
                }
            }
        });
    }

    private boolean isValidLogin() {
        // Implement your login validation logic here
        // For simplicity, I'm using dummy data
        String username = usernameEditText.getText().toString();
        String password = passwordEditText.getText().toString();
        return username.equals("user") && password.equals("password");
    }
}
